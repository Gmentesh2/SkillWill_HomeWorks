function mySetTimeoutTwo(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay * 1000);
    });
  }
    
    async function makeToys2() {
     await mySetTimeoutTwo(3);
      console.log('Toy is assembled');
      if(Math.random() > 0.1) {
        return 'Undefected'
      } else {
        return 'Defected';
      }}
      
     
    
     async function deliverToys2(status) {
      await mySetTimeoutTwo(2);
      if(status === 'Undefected') {
        if(Math.random() > 0.0001) {
          return 'delievered';
        } else {
          return 'not delievered'
        }
    } else{
      return 'toy was defected';
    
    }
     }
    async function sellToys2(deliverStatus) {
      await mySetTimeoutTwo(1);
      if(deliverStatus === 'delievered') {
        if(Math.random() > 0.7) {
          return 'Toy has been sold';
        } else {
          return 'Toy was not sold'
        }
    } else{
      return 'toy was not delievered';
    
    }
    }
    
    
    async function promisify2(){
      try {
        const status = await makeToys();
        const deliverStatus = await deliverToys(status);
        const result = await sellToys(deliverStatus);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    
    promisify2();