/*
Navicat MySQL Data Transfer

Source Server         : LoaclHost
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : jswl_auto_repair

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-04-05 00:36:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for customer_survey
-- ----------------------------
DROP TABLE IF EXISTS `customer_survey`;
CREATE TABLE `customer_survey` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_sex` int(2) NOT NULL DEFAULT '3' COMMENT '1:男;2:女;3:未知',
  `user_age` int(2) DEFAULT NULL,
  `user_telphone` varchar(20) NOT NULL,
  `user_business_address` int(10) NOT NULL DEFAULT '0' COMMENT '经营地址\r\n1:南二环\r\n2:民武路\r\n3:金武路\r\n4:南关中路\r\n5:沿河路\r\n6:新建路\r\n0:其它',
  `user_operation` varchar(255) DEFAULT NULL,
  `user_scope_of_business` int(1) NOT NULL DEFAULT '6' COMMENT '经营范围\r\n1:小车修理\r\n2:大车修理\r\n3:汽车销售\r\n4:汽车美容\r\n5:特种车辆维修\r\n6:未知',
  `user_is_intention` int(1) NOT NULL DEFAULT '3' COMMENT '是否有意向\r\n1:是;\r\n2:否;\r\n3:未知',
  `user_lease_use` int(1) unsigned zerofill NOT NULL DEFAULT '3' COMMENT '租赁用途\r\n1:自营\r\n2:合营\r\n3:未知',
  `user_move_date` datetime DEFAULT NULL COMMENT '搬迁日期',
  `user_whether_school_children` int(1) DEFAULT NULL COMMENT '是否有上学子女',
  `user_children_school_level` int(1) DEFAULT NULL COMMENT '子女上学程度\r\n1:幼儿园\r\n2:小学\r\n3:中学',
  `user_children_now_school` varchar(30) DEFAULT NULL,
  `user_children_way` int(1) DEFAULT '0' COMMENT '子女接送方式:\r\n1:接送\r\n2:自回',
  `user_is_stay` int(1) unsigned DEFAULT '3' COMMENT '入住后是否住宿:\r\n1:是\r\n2:否\r\n3:不确定',
  `user_source` int(1) DEFAULT '1' COMMENT '来源:\r\n1:朋友介绍\r\n2:媒体广告\r\n',
  `user_remake` text COMMENT '意见',
  `ext1` varchar(255) DEFAULT NULL,
  `ext2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of customer_survey
-- ----------------------------
