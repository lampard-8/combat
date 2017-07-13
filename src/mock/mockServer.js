/**
 * Created by shengxx on 2017/7/12.
 */
import Mock from 'mockjs'
import data from './data.json'

//注册接口
Mock.mock('/api/home', {
  code:0,
  data:data.baojie
});
Mock.mock('/api/serve', {
  code:0,
  data:data.anmo
});
Mock.mock('/api/item', {
  code:0,
  data:data.weixiu
});

