import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Category from "./components/Category";
import HeaderLine from "./components/HeaderLine";
import Discount from "./components/Discount";
import LikeList from "./components/LikeList";
import HomeHeader from "./components/HomeHeader";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import Activity from "./components/Activity";

import {
  actions as homeActions,
  getLikes,
  getDiscounts,
  getPageCountOfLikes
} from "../../redux/modules/home";
class Home extends Component {
  render() {
    const {likes,discounts,pageCount} = this.props
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Category />
        <HeaderLine />
        <Activity />
        <Discount data = {discounts} />
        <LikeList  data= {likes} pageCount = {pageCount} fetchData = {this.fetchMoreLikes}/>
        <Footer />
      </div>
    );

  }
  componentDidMount () {
    this.props.homeActions.loadDiscounts();
  }
  
  
  fetchMoreLikes = () => {
    this.props.homeActions.loadLikes()
  }
  
}



const mapStateToProps = (state, props) => {
  return {
    likes: getLikes(state),
    discounts: getDiscounts(state),
    pageCount: getPageCountOfLikes(state)
  };
};

const mapDispathToProps = dispath => {
  return {
    homeActions: bindActionCreators(homeActions, dispath) //home的action挂载到容器型组件的props，组件内部调用action的时候，不要在用dispath(action)调用了，可以直接调用homeAction的方法发送action
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
