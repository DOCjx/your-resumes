import app from 'app';
const {connect} = app;

export default ({tpl, dataTpl, service}) => {
    let flag = 1;
    const setHeight = () => {
        const availHeight = window.innerHeight;
        $('.content').css('marginTop', availHeight);
        $('#banner .banner-content').css('height', availHeight);
    };
    $('.share').click((e) => {
        flag == 1 && connect({tpl, dataTpl, service}, (data) => {
            setHeight();
            window.scrollTo(0, window.innerHeight);
        });
        if(flag != 1){
            setHeight();
            window.scrollTo(0, window.innerHeight);
        }
        flag++;
    });
    $('#go-top').click((e) => {
        window.scrollTo(0, 0);
    });
    $(document).scroll(() => {
        const winScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(flag == 1 && (winScroll / window.innerHeight) * 10 > 4){
            connect({tpl, dataTpl, service}, (data) => {
                setHeight();
            });
            flag++;
        }
    });
    window.onresize = () => {
        setHeight();
    };
    setHeight();
};