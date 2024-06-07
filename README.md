# django-auth

Perform login verification used in Django.

## Usage

### Verify password by Django hash
```
const djangoHash = 'pbkdf2_sha256$24000$MGpI+xNdivzlvj3b$T+2W22VhTrh1eV9Esy2STcBxgj55VQBPnvDaBBliFhQ=';
const password = 'password';

verify(password, djangoHash); // true
```

### Generate Django Hash

- Default 
salt: random, 
iterations: 24000, 
algorithm: sha256

```
djangoHash(password); 
// returning `pbkdf2_${algorithm}${iterations}${salt}${hash}`
```

or 

```
djangoHash(password, salt, iterations, algorithm);
```