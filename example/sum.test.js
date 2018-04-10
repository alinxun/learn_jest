const sum = require('../src/sum');

test('sum', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(0, 2)).toBe(2);
});

//普通匹配器
test('two plus two is four', () => {
  // expect(2+2) 返回一个期望对象 
  // .toBe(4) 是匹配器
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  //toEqual 递归检查对象或数组的每个字段
  expect(data).toEqual({one: 1, two: 2});
});

//相反的匹配
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// toBeNull 只匹配null
// toBeUndefined 只匹配 undefined
// toBeDefined 与 toBeUndefined 相反
// toBeTruthy 匹配任何 if 语句为真
// toBeFalsy 匹配任何 if 语句为假

test('null',()=>{
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero',()=>{
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

//数字的比较
test('two plus two',()=>{
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);// > 3
  expect(value).toBeGreaterThanOrEqual(3.5);// >= 3.5
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

//对于浮点数的相等 使用toBeCloseTo

test('两个浮点数相加',()=>{
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

//字符串
test('there is no I in team',()=>{
  expect('team').not.toMatch(/I/);
});
test('but there is a "stop" in Christoph',()=>{
  expect('Christoph').toMatch(/stop/);
});

//数组
test('购物清单(shopping list)里面有啤酒(beer)',()=>{
  const shoppingList =[
    'diapers','kleenex','trash bags','paper towels','beer'
  ];
  expect(shoppingList).toContain('beer');
});

//测试特定函数
function compileAndroidCode() {
  throw new ConfigError('you are using the wrong JDK');
}
test('compiling android goes as expected',() =>{
  expect(compileAndroidCode).toThrow();
  //expect(compileAndroidCode).toThrow(ConfigError);

  // You can also use the exact error message or a regexp
  //expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  //expect(compileAndroidCode).toThrow(/JDK/);
});