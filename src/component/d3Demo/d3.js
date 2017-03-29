/**
 * Created by Administrator on 2017/3/23.
 */
'use strict';
import React from 'react';
import * as d3 from 'd3';
var data_tree =require('./city_tree');
class D3 extends React.Component{
  constructor (props){
    super(props);
    this.state={
      visible:false
    }
  }
  componentDidMount(){
    var width =500;
    var height = 500;
    var nodes = [ { name: "桂林" }, { name: "广州" },
      { name: "厦门" }, { name: "杭州" },
      { name: "上海" }, { name: "青岛" },
      { name: "天津" } ];

    var edges = [ { source : 0 , target: 1 } , { source : 0 , target: 2 } ,
      { source : 0 , target: 3 } , { source : 1 , target: 4 } ,
      { source : 1 , target: 5 } , { source : 1 , target: 6 } ];
    var svg = d3.select('#power-guide')
      .append('svg')
      .attr({
        width: width,
        height: height,
      })
    var force = d3.layout.force()
      .nodes(nodes) //指定节点数组
      .links(edges) //指定连线数组
      .size([width,height]) //指定作用域范围
      .linkDistance(150)//指定连线长度
      .charge([-400]); //相互之间的作用力
    force.start(); //使力学生效，开始作用
    // console.log(nodes);
    // console.log(edges);
    //添加连线
    var svg_edges = svg.selectAll('line')
      .data(edges)
      .enter()
      .append('line')
      .style("stroke","#ccc")
      .style("stroke-width",1);

    var color = d3.scale.category20();
    //添加节点
    var svg_nodes = svg.selectAll('circle')
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r",20)
      .style("fill",function(d,i){
        return color(i);
      })
      .call(force.drag); //是节点能够被拖动
    //添加描述节点的文字
    var svg_texts = svg.selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .style('fill','black')
      .attr('dx',20)
      .attr('dy',8)
      .text(function(d,i){
        return d.name;
      })
    force.on('tick',function(){ //更新连线坐标
      svg_edges.attr("x1",function(d){return d.source.x;})
        .attr("y1",function(d){return d.source.y;})
        .attr("x2",function(d){return d.target.x;})
        .attr("y2",function(d){return d.target.y;});

      svg_nodes.attr("cx",function(d){return d.x;}) //更新节点坐标
        .attr("cy",function(d){return d.y;})

      svg_texts.attr("x",function(d){return d.x;})
        .attr("y",function(d){ return d.y;})
    });

    //饼图
    var svg = d3.select('#pie')
      .append('svg')
      .attr({
        width: width,
        height:height,
      });
    var dataset = [30,10,43,55,13];
    var pie = d3.layout.pie();
    var pieData = pie(dataset);
    var outerRadius = 150;//外半径
    var innerRadius = 0; //内半径，为0则中间没有空白
    var color = d3.scale.category10(); //有10中颜色的比例尺

    var arc = d3.svg.arc() //弧生成器
      .innerRadius(innerRadius)//设置内半径
      .outerRadius(outerRadius) //设置外半径
    var arcs = svg.selectAll('g')
      .data(pieData)
      .enter()
      .append('g')
      .attr("transform","translate("+(width/2)+","+(width/2)+")");
    arcs.append('path')
      .attr('fill',function(d,i){
        return color(i);
      })
      .attr('d',function(d){
        return arc(d) //调用弧生成器，得到路径值
      });
    arcs.append("text")
      .attr("transform",function(d){
        return "translate("+arc.centroid(d)+")"; //能算出弧线的中心
      })
      .attr("text-anchor",'middle')
      .text(function(d){
        return d.data;
      })

    //跳动的圆
    var svg = d3.select('#dynamic')
      .append('svg')
      .attr({
        "width": 500,
        "height": 500,
      })
    var circle1 = svg.append('circle')
      .attr('cx',100)
      .attr('cy',100)
      .attr('r',50)
      .style('fill','green');
    circle1.transition()    //启动过渡效果
      .duration(1000) //指定过度的持续时间
      .attr('cx',300);
    var circle2 = svg.append('circle')
      .attr('cx',100)
      .attr('cy',200)
      .attr('r',50)
      .style('fill','green')
    circle2.transition()
      .duration(1500)
      .attr('cx',300)
      .style('fill','red');
    var circle3 = svg.append('circle')
      .attr('cx',100)
      .attr('cy',300)
      .attr('r',50)
      .style('fill','green')

    circle3.transition()
      .duration(2000)
      .attr('cx',300)
      .attr('r',25)
      .ease("elastic")
      .style('fill','red')

    //线性图表
    var margin={left:50,top:30,right:20,bottom:20},
      g_width = width-margin.left-margin.right,
      g_height=height - margin.top-margin.bottom;
    var data = [1,3,5,7,8,4,3,7];

    var svg2 = d3.select('#line')
      .append('svg')
      .attr('width',width)
      .attr('height',height);

    var g=d3.select('svg')
      .append('g')
      .attr("transform","translate("+margin.left+","+margin.top+")");

    var scale_x = d3.scale.linear()
      .domain([0,data.length-1])
      .range([0,g_width]);
    var scale_y = d3.scale.linear()
      .domain([0,d3.max(data)])
      .range([g_height,0]);

    var line_generator = d3.svg.line()
      .x(function(d,i){return scale_x(i)})
      .y(function(d){return scale_y(d)})
      .interpolate('cardinal');//曲线的拟合方式

    d3.select('g')
      .append('path')
      .attr('class','linePath')
      .attr('d',line_generator(data))

    var x_axis = d3.svg.axis().scale(scale_x),
      y_axis = d3.svg.axis().scale(scale_y).orient("left");

    g.append('g')
      .call(x_axis)
      .attr('class','linePath')
      .attr("transform","translate(0,"+g_height+")")

    g.append("g")
      .call(y_axis)
      .attr('class','linePath')
      .append('text')
      .text('price($)')
      .attr('transform',"rotate(-90)")
      .attr("text-anchor","end")
      .attr("dy","1em");

  }
  render(){
    return (
      <div>
        <div id="line"></div>
        <div id="power-guide"></div>
        <div id="pie"></div>
        <div id="dynamic"></div>
      </div>
    )
  }
}
export default D3;
