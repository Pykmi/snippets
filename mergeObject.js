const merge = (to, from) => {
    for(n in from) {
       if(typeof to[n] == 'undefined') {
        to[n] = from[n];
      } else if (typeof from[n] == 'object') {
        to[n] = merge(to[n], from[n]);
      }
    }
   
    return to;
  };
   
  const person = { firstName: 'Jaakko', lastName: 'Hikinauha' };
  const address = { street: 'Kultakukkulantie 1', postal: 20750, city: 'Helsinki' };
   
  const jaakko = { ...person, ...address };
  const extended = merge(jaakko, { firstName: "Ellu", country: 'Suomi' });
   
  console.log(extended);