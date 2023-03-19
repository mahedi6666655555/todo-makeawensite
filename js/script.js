document.getElementById("btn").addEventListener("click",function(){

    // Swal.fire(
    //     'Good job!',
    //     'You clicked the button!',
    //     'success'
    //   )
      
      let get1=document.getElementById("inputt").value
      
      let get2=document.getElementById("inputp").value

      if(get1==="mahedi" && get2==="mahedi1"){
        
        Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )

              window.location.href="https://sweetalert2.github.io/"
              

      }


      else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'id pass is not valide!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
      }
      

})      


