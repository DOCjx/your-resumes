<div id="share" class="content"><!--Start  -->
    <section class="green-section">
        <div class="wrapper">
            <div>
                <h2>爱好分享</h2>
                <div class="hr"></div>
                <p>
                    这是一只爱抓小精灵的程序猿的故事
                </p>
            </div>
            <div class="icon-group">
                {{#each nav}}
                    <span class="icon"><b>{{name}}</b></span>
                {{/each}}
            </div>
        </div>
    </section>

    <section class="gray-section">
        <div class="contain-preview">
            {{#each nav}}
                {{#if flag}}
                        <div class="line">
                    <div class="article-preview">
                            <div class="img-section">
                                <img src="{{pic}}">
                            </div>
                            <div class="text-section">
                                <h3>{{name}}</h3>
                                <div class="sub-heading">{{sub_title}}</div>
                                <p>{{descript}}</p>
                            </div>
                    </div>
                        </div>
                {{else}}
                        <div class="line">
                    <div class="article-preview">
                            <div class="text-section">
                                <h3>{{name}}</h3>
                                <div class="sub-heading">{{sub_title}}</div>
                                <p>{{descript}}</p>
                            </div>
                            <div class="img-section">
                                <img src="{{pic}}">
                            </div>
                    </div>
                        </div>
                {{/if}}
            {{/each}}
        </div>
    </section>

    <section class="purple-section">
        <div class="wrapper">
            <div class="heading-wrapper">
                <h2>文章排名</h2>
                <div class="hr"></div>
            </div>

            <div class="card-group">
                <div class="card">
                    <div class="card-content">
                        <h3>最新</h3>
                        <div class="card-ul">
                            <ul>
                                {{#each new}}
                                    <li>
                                        <p class="card-item">
                                            <a href="#?m=detail&id={{id}}&category_id={{category_id}}">
                                                {{title}}
                                            </a>
                                            <span style="display: inline-block;font-size: 14px">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                                {{update_time}}
                                            </span>
                                        </p>
                                    </li>
                                {{/each}}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <h3>最热</h3>
                        <div class="card-ul">
                            <ul>
                                {{#each hot}}
                                    <li>
                                        <p class="card-item">
                                            <a href="#?m=detail&id={{id}}&category_id={{category_id}}">
                                                {{title}}
                                            </a>
                                            <span style="display: inline-block;font-size: 14px">
                                                <span class="glyphicon glyphicon-eye-open"></span>
                                                {{times}}
                                            </span>
                                        </p>
                                    </li>
                                {{/each}}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</div>