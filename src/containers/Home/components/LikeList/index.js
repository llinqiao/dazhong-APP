import React, { Component } from "react";
import LikeItem from "../LikeItem";
import "./style.css";
import Loading from "../../../../components/Loading"


class LikeList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef()//通过react获取到Dom节点的信息  
   
    this.removeListener = false
  }

  render() {
    const { data, pageCount} = this.props;
    return (
      <div ref = {this.myRef} className="likeList">
        <div className="likeList__header">猜你喜欢</div>
        <div className="likeList__list">
          {data.map((item, index) => {
            return <LikeItem key={index} data={item} />;
          })}
        </div>
        {pageCount < 3 ? (
          <Loading />
        ) : (
          <a className="likeList__viewAll">查看更多</a>
        )}
      </div>
    );
  }

  componentDidMount(){
    if(this.props.pageCount<3){
      document.addEventListener('scroll',this.handleScroll)
    }else {
      this.removeListener = true;
    }
    
    if(this.props.pageCount===0){
      this.props.fetchData()
    }
  }

  componentDidUpdate(){
    if(this.props.pageCount>=3 &&!this.removeListener){
      document.removeEventListener('scroll',this.handleScroll)
      this.removeListener = true
    }
  }

  //组件移除之后在检查一次事件是否取消绑定
  componentWillUnmount(){
    if(!this.removeListener){
      document.removeEventListener('scroll',this.handleScroll)
    }

  }

  //处理滚动事件，加载更多的实现
  handleScroll = () => {
    const scrollTop =document.documentElement.scrollTop//滚动高度距离顶端
    const screenHeight = document.documentElement.clientHeight//屏幕高度
    const likeListTop = this.myRef.current.offsetTop//这个组件距离页面顶部的距离
    const likeListHeight = this.myRef.current.offsetHeight//这个组件的高度

    if(scrollTop>= likeListHeight+likeListTop-screenHeight){//如果滚动距离让组件的底部在可视区域的底部，那就加载更多的数据内容了
    //   const newData = this.state.data.concat(dataSource)
    //   const newLoadTimes = this.state.loadTimes + 1

    //   setTimeout(() => {
    //     this.setState({
    //       data: newData,
    //       loadTimes:newLoadTimes,
    //     })
    //   },1000)
    // }
    this.props.fetchData()
    }
  }


}



export default LikeList
