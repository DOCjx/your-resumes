<nav clsss="nav" id="go-top">
    <div class="logo">
        <a href="#?m=index">小窝</a>
    </div>
    {{!<ul class="user-login">
        <empty name="user_name" id="vo">
            <li><a href="{:U('Index/login')}">登录</a></li>
        <else/>
            <li>欢迎您 <b>{$user_name}</b></li>
            <a href="{:U('Index/logout')}"><li>注销</li></a>
            <li>
                <a href="{:U('Admin/index/index')}">后台管理</a>
                <a href="javascript:;">&nbsp;
                    <img class="user_img" src="" alt="">
                </a>
            </li>
        </empty>
    </ul>}}

    <ul class="top-nav">
        {{#each nav}}
            <li class="nav-item">
                <a href="#?m=list&id={{id}}">{{name}}</a>
                {{#if sub}}
                    <div class="submenu">
                        <ul>
                            {{#each sub}}
                            <li><a href="#?m=list&id={{id}}&t={{type}}">{{name}}</a></li>
                            {{/each}}
                        </ul>
                    </div>
                {{/if}}
            </li>
        {{/each}}

        {{!<volist name="category1" id="cat">
            <empty name="cat['child']">
            <else/>
                <li class="nav-item">
                    <a href="{:U('index/category',array('c_id'=>$cat['id']))}">{$cat['name']}</a>
                    <div class="submenu">
                        <volist name="cat['child']" id="c">
                            <ul>
                                <li><a href="{:U('index/category',array('category_id'=>$c['id']))}">{$c['name']}</a></li>
                            </ul>
                        </volist>
                    </div>
                </li>
            </empty>
            </volist>}}
    </ul>
</nav>