import React from 'react';
import './Minesweeper.css';

export default class Minesweeper extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={array:[],tiles:[],score:[]};
    }

    componentDidMount() 
    {
        this.resetMines();
    }

    resetMines()
    {
        const array=[];
        const tiles=[];
        const score=[];
        score.push(0);
        for(let i=0;i<100;i++)
        {
            tiles.push('TRY ME:)');
        }
        var i=20;
        while(i>0)
        {
            var x=randomin(0,99);
            var flag=0;
            for(let i=0;i<array.length;i++)
            {
                if(array[i]===x)
                {
                    flag=1;
                    break;
                }
            }
            if(flag===0)
            {
                i--;
                array.push(x);
            }
        }
        console.log(array);
        this.setState({array,tiles,score});
    }

    process(idx)
    {
        const {array,tiles,score}=this.state;
        var flag=checkmine(array,idx);
        if(flag===1)
        {
            const t=document.getElementsByClassName('mine');
            const st=t[idx];
            st.innerHTML='BOMB!';
            st.style.margin='2px';
            st.style.background='red';
            st.style.borderRadius='15px';
            const c=document.getElementById('GameOver');
            c.style.display='block';
            const con=document.getElementById('Game');
            con.style.display='none';
        }
        else
        {
            score[0]+=1;
            if(score[0]===80)
            {
                const w=document.getElementById('Winner');
                w.style.display='block';
                const con=document.getElementById('Game');
                con.style.display='none';
            }
            this.setState({array,tiles,score});
            const t=document.getElementsByClassName('mine');
            const st=t[idx];
            var x=Math.floor(idx/10);
            var y=idx%10;
            var x1=x-1;
            var y1=y-1;
            var x2=x-1;
            var y2=y;
            var x3=x-1;
            var y3=y+1;
            var x4=x;
            var y4=y+1;
            var x5=x+1;
            var y5=y+1;
            var x6=x+1;
            var y6=y;
            var x7=x+1;
            var y7=y-1;
            var x8=x;
            var y8=y-1;
            var count=0;
            if(validate(x1,y1)===1)
            {
                console.log(x1+' '+y1);
                count+=checkmine(array,x1*10+y1);
            }
            if(validate(x2,y2)===1)
            {
                console.log(x2+' '+y2);
                count+=checkmine(array,x2*10+y2);
            }
            if(validate(x3,y3)===1)
            {
                console.log(x3+' '+y3);
                count+=checkmine(array,x3*10+y3);
            }
            if(validate(x4,y4)===1)
            {
                console.log(x4+' '+y4);
                count+=checkmine(array,x4*10+y4);
            }
            if(validate(x5,y5)===1)
            {
                console.log(x5+' '+y5);
                count+=checkmine(array,x5*10+y5);
            }
            if(validate(x6,y6)===1)
            {
                console.log(x6+' '+y6);
                count+=checkmine(array,x6*10+y6);
            }
            if(validate(x7,y7)===1)
            {
                console.log(x7+' '+y7);
                count+=checkmine(array,x7*10+y7);
            }
            if(validate(x8,y8)===1)
            {
                console.log(x8+' '+y8);
                count+=checkmine(array,x8*10+y8);
            }
            st.innerHTML=count;
            st.style.margin='2px';
            st.style.background='green';
            st.style.borderRadius='15px';
        }
    }

    render() 
    {
        const {array,tiles,score}=this.state;
        return(
            <div className="mine-container">
                <div id="GameOver">
                <br></br>
                <br></br>
                <br></br>
                {'OOPS:( GAME OVER'}
                <br></br>
                <br></br>
                <br></br>
                Score : {score[0]}
                <br></br>
                <br></br>
                <br></br>
                <button id="newgame" onClick={()=>NG()}>NEW GAME</button>
                <br></br></div>
                <div id="Winner">
                <br></br>
                <br></br>
                <br></br>
                {'CONGRATS:) YOU HAVE WON THE GAME!!'}
                <br></br>
                <br></br>
                <br></br>
                Score : 80
                <br></br>
                <br></br>
                <br></br>
                <button id="newgame" onClick={()=>NG()}>NEW GAME</button>
                <br></br></div>
                <div id="Game">
                {tiles.map((value,idx)=>(
                <button className="mine" key={idx} onClick={()=>this.process(idx)}>{value}
                </button>))}
                <br></br>
                <br></br>
                <div id="Score">Score : {score[0]}</div>
                </div>
            </div>
        );
    }
}

function validate(x,y)
{
    if(x<0||x>9)
    {
        return 0;
    }
    if(y<0||y>9)
    {
        return 0;
    }
    return 1;
}

function randomin(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function checkmine(arr,i)
{
    for(let j=0;j<arr.length;j++)
    {
        if(arr[j]===i)
        {
            return 1;
        }
    }
    return 0;
}

function NG()
{
    window.location.reload();
}