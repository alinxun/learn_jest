//Javascript 中的异步代码

//回掉
test('the data is peanut butter',done =>{
    function callback(data){
        expect(data).toBe('peanut butter');
        done();
    }
    fetchData(callback);
});

//Promises
test('the data is peanut butter',()=>{
    expect.assertions(1);
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

//.resolves / .rejects
test('the data is peanut butter', () => {
    expect.assertions(1);
    return expect(fetchData()).resolves.toBe('peanut butter');
});

//Async/Await
test('the data is peanut butter', async () => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });