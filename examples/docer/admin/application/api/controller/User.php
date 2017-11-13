<?php
namespace app\api\controller;
use think\controller\Rest;
use think\Request;
use think\Response;

Class User extends Rest {
    public function index()
    {
        // 默认get
        return json(['index']);
    }
    public function create()
    {
        //
        return json(['create']);
    }
    public function save(Request $request)
    {
        return json(['save()']);
    }
    public function read($id)
    {
        // dump(Request::instance());
        return json(['data'=> json_encode(Request::instance()->param())], 200);
        // 输出id为1的Info的json数据
    }
    public function update($id)
    {
        return json(['status'=>'ok']);
        // 输出id为1的Info的json数据
    }
    public function edit($id){
        return json(['edit']);
    }
    public function delete($id)
    {
        return json(['delete']);
    }
}
