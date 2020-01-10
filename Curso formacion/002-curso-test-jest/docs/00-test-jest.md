# Test Jest

[Jest](https://jestjs.io/) es un framework de testing para JavaScript muy sencillo y rápido. Puedes usarlo con cualquier otro framework. Para el caso de Angular ya viene preconfigurado si usas las extensiones Nx.

# Primera prueba unitaria

Lo primero que vamos hacer es crear un fichero con el código javascript, ya que este sera el código donde realizaremos los test.

Para este ejemplo voy a crear un fichero llamado **index.js**

    export const sumar = (a, b) => a + b;
    export const restar = (a, b) => a - b;
    export const multiplicar = (a, b) => a * b;
    export const dividir = (a, b) => a / b;

Continuamos creando una carpeta en nuestro proyecto llamada **test,** ya que allí guardaremos todos nuestros test.

Una vez dentro de la carpeta **test** crearemos un fichero y lo llamaremos igual que el fichero donde esta el código javascript que vamos a realizar el test, seguido de .**test.**

El fichero quedaría de la siguiente forma: **index.test.js**

    import { sumar, restar, multiplicar, dividir } from '../index.js';
    
    describe('Operaciones matemáticas', () => {
        test('Realizamos la suma', () => {
            expect(sumar(1,1)).toBe(2);
        });
        test('Realizamos la resta', () => {
            expect(restar(1,1)).toBe(0);
        });
        test('Realizamos la multiplicacion', () => {
            expect(multiplicar(1,1)).toBe(1);
        });
        test('Realizamos la division', () => {
            expect(dividir(1,1)).toBe(1);
        });
    });

Con nuestro fichero ya creado vamos a ejecutar el test, y para eso crearemos una tarea en la sección scripts dentro del package.json:

    {
    "name": "JEST",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
    "test": "jest"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
    "babel-jest": "^23.6.0",
    "babel-polyfill": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "jest": "^23.6.0"
    }
    }

Ahora solo queda ejecutar nuestro test, y para ello usaremos la tarea que habíamos creado en el **package.json** usando el siguiente comando: **npm run test** (test es el nombre del key asociado al comando que ejecutara) o **npm t** (forma abreviada).

Si todo funciona correctamente deberíamos ver en la pantalla el siguiente resultado:

    > jest
    
     PASS  test/index.test.js
      Operaciones matemáticas
        √ Realizamos la suma (2ms)
        √ Realizamos la resta
        √ Realizamos la multiplicacion
        √ Realizamos la division
    
    Test Suites: 1 passed, 1 total
    Tests:       4 passed, 4 total
    Snapshots:   0 total
    Time:        1.465s
    Ran all test suites.

### Matchers

**Jest** usa los **matchers** para probar los diferentes valores que puede tener nuestro código. En nuestro ejemplo vamos a usar algunos y así entender como funcionan los test.

Para el siguiente ejemplo hemos usado los siguientes **matchers:**

- **.toBe:** Usado para comparar valores primitivos
- **.toEqual:** Usado para comparar recursívamente todas las propiedades de un objetos, también conocido como igualdad profunda.
- **toBeLessThan:** El valor es menor que.
- **toBeLessThanOrEqual:** El valor es menor o igual que.
- **toBeGreaterThanOrEqual:** El valor es mayor o igual que.
- **toBeGreaterThan:** El valor es mayor que.
- **toBeTruthy:** El valor es verdadero.
- **toBeFalsy:** El valor es falso.
- **toBeUndefined:** El valor es ‘undefined’.
- **toBeNull:** El valor es ‘null’.
- **.toContain:** Contiene el elemento dentro del array.
- **.toHaveLength:** El array tiene la longitud.
- **toMatch:** Comprueba que un texto coincide con una expresión regular
- **toHaveLength:** Comprueba la longitud.

vamos hacer un pequeño test usando estos matchers: 

**index.js**

    const provincias = ['Álava','Badajoz','Cáceres','Girona','Huelva','Jaén','La Rioja','Madrid','Navarra'];
    const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    const expReg = {
        responseOK: 'Response OK',
        responseFAIL: 'Response FAIL',
        email: 'test@test.com',
        telefono: '919784852'
    }
    export const sumar = (a, b) => a + b;
    export const restar = (a, b) => a - b;
    export const multiplicar = (a, b) => a * b;
    export const dividir = (a, b) => a / b;
    export const isNull = () => null;
    export const isFalse = () => false;
    export const isTrue = () => true;
    export const isUndefined = () => undefined;
    export const arrProvincias = () => provincias;
    export const arrDias = () => dias;
    export const objExpReg = () => expReg;

**index.test.js**

    import { sumar, restar, multiplicar, dividir, isFalse, isNull, isTrue, isUndefined, arrDias, arrProvincias, objExpReg } from '../index.js';
    
    describe('Operaciones matemáticas', () => {
        test('Realizamos la suma', () => {
            expect(sumar(1,1)).toBe(2);
        });
        test('Realizamos la resta', () => {
            expect(restar(1,1)).toBe(0);
        });
        test('Realizamos la multiplicacion', () => {
            expect(multiplicar(1,1)).toBe(1);
        });
        test('Realizamos la division', () => {
            expect(dividir(1,1)).toBe(1);
        });
    });
    describe('Common matchers', () => {
        const datos = {
            nombre: 'Persona 1',
            edad: 10
        }
        const datos2 = {
            nombre: 'Persona 1',
            edad: 10
        }
        test('Comprobamos que los objectos son iguales', () => {
            expect(datos).toEqual(datos2);
        });
    });
    describe('Numeric matchers', () => {
        test('Resultado menor que...', () => {
            expect(restar(5,3)).toBeLessThan(3);
        });
        test('Resultado menor o igual que...', () => {
            expect(restar(5,3)).toBeLessThanOrEqual(2);
        });
        test('Resultado mayor o igual que...', () => {
            expect(multiplicar(2,5)).toBeGreaterThanOrEqual(10);
        });
        test('Resultado mayor que...', () => {
            expect(sumar(5,5)).toBeGreaterThan(9);
        });
    });
    describe('Matchers Boolean, Undefined o Null', () => {
        test('Resultado true', () => {
            expect(isTrue()).toBeTruthy();
        });
        test('Resultado false', () => {
            expect(isFalse()).toBeFalsy();
        });
        test('Resultado undefined', () => {
            expect(isUndefined()).toBeUndefined();
        });
        test('Resultado null', () => {
            expect(isNull()).toBeNull();
        });
    });
    describe('Matchers Arrays', () => { 
        test('Madrid existe en el array', () => {
            expect(arrProvincias()).toContain('Madrid');
        });
        test('Guadalajara no existe en el array', () => {
            expect(arrProvincias()).not.toContain('Guadalajara');
        });
        test('El array semana tiene 9 elementos', () => {
            expect(arrProvincias()).toHaveLength(9);
        });
        test('Existe Lunes en el array semana', () => {
            expect(arrDias()).toContain('Lunes');
        });
    });
    describe('Matchers Strings', () => {
        const exp = objExpReg();
        test('Comprobamos si la respuesta es correcta', () => {
            expect(exp.responseOK).toMatch(/OK/);
        });
        test('Comprobamos si la respuesta es incorrecta', () => {
            expect(exp.responseFAIL).toMatch(/FAIL/);
        });
        test('Comprobamos si la respuesta tiene una longitud', () => {
            expect(exp.responseFAIL).toHaveLength(13);
        });
        test('Comprobamos dirección de email', () => {
            expect(exp.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/);
        })
        test('Comprobamos número de teléfono', () => {
            expect(exp.telefono).toMatch(/^[9|6|7][0-9]{8}$/);
        });
    });

Para terminar usaremos unas funciones que nos ofrece **jest,** y que nos permite poder ejecutar antes, durante o después nuestras pruebas.

- **afterEach():** Después de cada prueba.
- **afterAll():** Después de todas las pruebas.
- **beforeEach():** Antes de cada prueba.
- **beforeAll():** Antes de todas las pruebas.

**index.test.js**

    import { sumar, restar, multiplicar, dividir, isFalse, isNull, isTrue, isUndefined, arrDias, arrProvincias, objExpReg } from '../index.js';
    
    describe('Operaciones matemáticas', () => {
        test('Realizamos la suma', () => {
            expect(sumar(1,1)).toBe(2);
        });
        test('Realizamos la resta', () => {
            expect(restar(1,1)).toBe(0);
        });
        test('Realizamos la multiplicacion', () => {
            expect(multiplicar(1,1)).toBe(1);
        });
        test('Realizamos la division', () => {
            expect(dividir(1,1)).toBe(1);
        });
    });
    describe('Common matchers', () => {
        const datos = {
            nombre: 'Persona 1',
            edad: 10
        }
        const datos2 = {
            nombre: 'Persona 1',
            edad: 10
        }
        test('Comprobamos que los objectos son iguales', () => {
            expect(datos).toEqual(datos2);
        });
    });
    describe('Numeric matchers', () => {
        test('Resultado menor que...', () => {
            expect(restar(5,3)).toBeLessThan(3);
        });
        test('Resultado menor o igual que...', () => {
            expect(restar(5,3)).toBeLessThanOrEqual(2);
        });
        test('Resultado mayor o igual que...', () => {
            expect(multiplicar(2,5)).toBeGreaterThanOrEqual(10);
        });
        test('Resultado mayor que...', () => {
            expect(sumar(5,5)).toBeGreaterThan(9);
        });
    });
    describe('Matchers Boolean, Undefined o Null', () => {
        test('Resultado true', () => {
            expect(isTrue()).toBeTruthy();
        });
        test('Resultado false', () => {
            expect(isFalse()).toBeFalsy();
        });
        test('Resultado undefined', () => {
            expect(isUndefined()).toBeUndefined();
        });
        test('Resultado null', () => {
            expect(isNull()).toBeNull();
        });
    });
    describe('Matchers Arrays', () => { 
        test('Madrid existe en el array', () => {
            expect(arrProvincias()).toContain('Madrid');
        });
        test('Guadalajara no existe en el array', () => {
            expect(arrProvincias()).not.toContain('Guadalajara');
        });
        test('El array semana tiene 9 elementos', () => {
            expect(arrProvincias()).toHaveLength(9);
        });
        test('Existe Lunes en el array semana', () => {
            expect(arrDias()).toContain('Lunes');
        });
    });
    describe('Matchers Strings', () => {
        const exp = objExpReg();
        test('Comprobamos si la respuesta es correcta', () => {
            expect(exp.responseOK).toMatch(/OK/);
        });
        test('Comprobamos si la respuesta es incorrecta', () => {
            expect(exp.responseFAIL).toMatch(/FAIL/);
        });
        test('Comprobamos si la respuesta tiene una longitud', () => {
            expect(exp.responseFAIL).toHaveLength(13);
        });
        test('Comprobamos dirección de email', () => {
            expect(exp.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/);
        })
        test('Comprobamos número de teléfono', () => {
            expect(exp.telefono).toMatch(/^[9|6|7][0-9]{8}$/);
        });
    });
    afterEach(() => console.log('Despues de cada prueba'));
    afterAll(() => console.log("Despues de todas las pruebas"));
    beforeEach(() => console.log('Antes de cada prueba'));
    beforeAll(() => console.log('Antes de todas las pruebas'));