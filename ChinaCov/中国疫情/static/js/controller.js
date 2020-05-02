function gettime(){
    $.ajax({
        url:"/time",
    // {#data:{},#}
    // {#dataType:'json',#}
    // {#type:'post',#}
    timeout:10000,
        success:function (data) {
            $("#time").html(data)
    },
    error:function (xhr,type,errorThrown) {

        }
    });
}

function get_c1_data(){
    $.ajax(
        {
            url:"/c1",
            success:function (data) {
                $(".num h1").eq(0).text(data.sum_confirm);
                $(".num h1").eq(1).text(data.heal);
                $(".num h1").eq(2).text(data.dead);
                $(".num h1").eq(3).text(data.suspect);
                },
            error:function (xhr,type,errorThrown) {

            }
        })
}
function get_c2_data() {
    $.ajax({
        url:"/c2",
         success:function (data) {
            ec_center_option.series[0].data=data.data
            ec_center.setOption(ec_center_option)
                },
            error:function (xhr,type,errorThrown) {

            }
    })
}


function get_l1_data() {
    $.ajax({
        url:"/l1",
        success: function(data) {
            ec_left1_Option.xAxis[0].data=data.day
            ec_left1_Option.series[0].data=data.confirm
            ec_left1_Option.series[3].data=data.suspect
            ec_left1_Option.series[1].data=data.heal
            ec_left1_Option.series[2].data=data.dead
            ec_left1.setOption(ec_left1_Option)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}


function get_l2_data() {
    $.ajax({
        url:"/l2",
        success: function(data) {
            ec_left2_Option.xAxis[0].data=data.day
            ec_left2_Option.series[0].data=data.confirm_add
            ec_left2_Option.series[1].data=data.suspect_add
            ec_left2.setOption(ec_left2_Option)
        },
        error: function(xhr, type, errorThrown) {
        }
    })
}



function get_r1_data() {
    $.ajax({
        url: "/r1",
        success: function (data) {
            ec_right1_option.xAxis.data=data.city;
            ec_right1_option.series[0].data=data.confirm;
            ec_right1.setOption(ec_right1_option);
        }
    })
}

function get_r2_data() {
    $.ajax({
        url: "/r2",
        success: function (data) {
            ec_right2_option.series[0].data=data.kws;
            ec_right2.setOption(ec_right2_option);
        }
    })
}

get_l2_data()
gettime()
get_c1_data()
get_c2_data()
get_l1_data()
get_r1_data()
get_r2_data()
setInterval(gettime,1000)
// setInterval(get_c1_data,1000)