$(document).ready(()=>{
    const url = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders'
    $.get(url , (data)=>{
        // console.log(data)
        
        let arr = [];
        
 
          if($('#new')[0].checked){

              let New = data.filter((element)=>{
                  return element.orderStatus=='New'
              });
              // console.log(packed)
              New.forEach((e)=>{
                  arr.push(e)
              })
              
          }
            // $('#textbox1').val($(this).is(':checked'));
            // alert('done')

            if($('#packed')[0].checked){
                let packed = data.filter((element)=>{
                    return element.orderStatus=='Packed'
                });
                // console.log(packed)
                packed.forEach((e)=>{
                    arr.push(e)
                })
                
            }
            if($('#transit')[0].checked){
                let transit = data.filter((element)=>{
                    return element.orderStatus=='InTransit'
                });
                // console.log(packed)
                transit.forEach((e)=>{
                    arr.push(e)
                })
                
            }
            
            if($('#deliver')[0].checked){

                let deliver = data.filter((element)=>{
                    return element.orderStatus=='Delivered'
                });
                // console.log(packed)
                deliver.forEach((e)=>{
                    arr.push(e)
                })
                
            }




        
            let count = arr.length

        

        arr.forEach(order => {


            const rowHtml = `<tr class="tbody_row">
            <td>${order.id}</td>
            <td>${order.customerName}</td>
            <td>${order.orderDate} <p>${order.orderTime}</p></td>
            <td>${order.amount}</td>
            <td>${order.orderStatus}</td>
        </tr> `

            $('#tbody').append(rowHtml)

        });

        $('#count').html(count)



    });



    $('#logout').click(()=>{
        // alert('yes')
        localStorage.removeItem('user_data')
        window.location.href = 'index.html'
    })


    let s = $('#packed')[0].checked


    console.log(s)

    



});