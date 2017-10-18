<?php

namespace app\index\controller;

use app\admin\model\User;
use app\common\controller\Frontend;
use think\Cookie;

class Mob extends Frontend
{

    protected $layout = '';

    public function _initialize()
    {
        parent::_initialize();
    }

    public function index()
    {
        if ( Cookie::has('zw_info')){
            $this->redirect(url('show'));
        }
        return $this->view->fetch();
    }

    public function check()
    {
        $map=array(
            'name'=>input('name'),
            'phone'=>input('phone')
        );
        $userinfo=User::get($map);
        if ($userinfo){
            $userinfo->isload=1;
            $userinfo->loadtime=time();
            $userinfo->save();
            Cookie::set('zw_info',$userinfo);
            $this->success('签到成功,正在查询您的会场信息',url('show'));
        }else{
            $this->error('没有查询到您的信息,请确认姓名和手机号是否正确');
        }
    }
    public  function show(){
        $user=$this->getinfo();
        $this->assign('user',$user);
        return $this->view->fetch();
    }

    public function getinfo(){
        $user=Cookie::get('zw_info');
        if ($user){
            return json_decode($user,true);
        }else{
            $this->redirect(url('index'));
        }

    }
}
