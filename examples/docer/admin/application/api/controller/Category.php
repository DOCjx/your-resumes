<?php
namespace app\api\controller;
use think\controller\Rest;
use think\Request;
use think\Response;

Class Category extends Rest {
    public function index()
    {
        $category = db('category')
                    ->where('switch',1)
                    ->order('rank DESC')
                    ->select();
        $arr = array();
        foreach ($category as $k => $v) {
            if($v['pid'] != 0) break;
            foreach ($category as $key => $value) {
                if($v['id'] == $value['pid']){
                    $v['sub'][] = $value;
                }
            }
            array_push($arr, $v);
        }
        $json['status'] = 'ok';
        $json['data'] = $arr;
        return json($json);
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
