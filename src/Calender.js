import React from 'react'
import './calender.css'
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import { isSameYear,isSameMonth,isSameDay,addDays, format,startOfMonth,endOfMonth,startOfWeek,endOfWeek} from 'date-fns'
import Task from "./Task"

class Calender extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentMonth : new Date(),
            selectedDate : new Date(),
        };
    }

 renderCells(){

        console.log(this.state);
        const style = { 
          backgroundColor : "paleturquoise"
        }
        const { currentMonth, selectedDate } = this.state;
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            days.push(
            <div
                className={`tooltip col cell ${
                !isSameMonth(day, monthStart)
                    ? "disabled"
                    : isSameDay(day, selectedDate) ? "selected" : ""
                }`}
                key={day}
                onClick={() => this.onDateClick(cloneDay)}
                style = { this.hasTasks(day) ? style : null}
            >
              <span className="tooltiptext"><h6>
                TOTAL : {this.ProgressStatus(day)[0]}
                <br></br>
                DONE : {this.ProgressStatus(day)[1]}
              </h6></span>
                <span className="number" title="this is working">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
             </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
            {days}
            </div>
        );
        days = [];
        }
        return <div className="body">{rows}</div>;
    }

      renderDays(){
        const dateFormat = "EEE" ;
        const days = [];
  let startDate = startOfWeek(this.state.currentMonth);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    );
  }
  return (<div className="days row">{days}</div>);
}

    renderHeader(){
        const dateFormat = "MMMM yyyy";
  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={this.prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="col col-center">
        <span>
          {format(this.state.currentMonth, dateFormat)}
        </span>
      </div>
      <div className="col col-end" onClick={this.nextMonth}>
        <div className="icon">chevron_right</div>
      </div>
    </div>
  );   
    }

  

   

    ProgressStatus(date1){
      const arr = this.props.list.filter(item => this.isSameDate(date1,item.deadline));
      var l_total = arr.length;
      var l_done = 0;
      if(l_total > 0){
        const d = arr.filter(item => item.completed === true);
        l_done = d.length;
      }
      return [l_total,l_done];
    }

    hasTasks(date1){
      const arr = this.props.list.filter(item => this.isSameDate(date1,item.deadline));
      if(arr.length >0)
      return true;
      else
      return false;
    }

    isSameDate(date1,date2){
        return (!isSameYear(date1,date2)?false
        : !isSameMonth(date1, date2)
                    ? false
                    : isSameDay(date1, date2) ? true : false)
    }

    onDateClick = day =>{
        this.setState({
            selectedDate : day
        });
    }

    nextMonth =() => {
        this.setState({
            currentMonth : addMonths(this.state.currentMonth,1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth : subMonths(this.state.currentMonth,1)
        });
    };

    renderTasks(){
        const Tasks = this.props.list.filter(item => this.isSameDate(item.deadline,this.state.selectedDate)).map(item=> <Task key={item.id} item={item}/>)
        //console.log(Tasks)
        if(Tasks.length >0)
        return <div>{Tasks}</div>
        else
        return <div align ="center"><h1>NO TASKS FOR THIS DATE :)</h1> </div> 
    }

    render(){
        //console.log(this.props)
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
                {this.renderTasks()}
            </div>
        );
    }
}

export default Calender