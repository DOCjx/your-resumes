<?php
namespace app\api\controller;
use think\controller\Rest;
use think\Request;
use think\Response;

Class Detail extends Rest {
    private function formatTitle(&$arr){
        foreach ($arr as $k => $v) {
            if(strlen($arr[$k]['title']) >= 15){
                $arr[$k]['title'] = mb_substr($arr[$k]['title'], 0, 15).'...';
            }
        }
    }
    private function formatTime(&$arr){
        foreach ($arr as $k => $v) {
            $arr[$k]['update_time'] = date('y-m-d', $arr[$k]['update_time']);
        }
    }
    public function index()
    {
        $detail = db('detail')
                  ->where('status',1);
        $hot = $detail
               ->field('id,category_id,title,times')
               ->order('times desc')
               ->limit(5)
               ->select();
        $new = $detail
               ->field('id,category_id,title,update_time')
               ->order('update_time desc')
               ->limit(5)
               ->select();
        $this->formatTitle($hot);
        $this->formatTitle($new);
        $this->formatTime($new);
        $json['status'] = 'ok';
        $json['data'] = ['hot'=> $hot, 'new'=> $new];
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
