# ADMIN PANEL Requerimientos
- [ ] Admin Actions
- [ ]  Admin can register
- [ ]  Admin can register employees
- [ ] Admin can modify permissions
- [ ]  User/Admin can login
- [ ] Admin can update employees' personal data
- [ ]  User/Admin can change their password
- [ ] Admin can register days off
- [ ] User (Employee) Actions
- [ ]  User can access their profile
- [ ]  User can check available days off
- [ ] User can check overtime
- [ ]  User can check schedule
- [ ] User can download pa￼ ￼ yroll



## Instalacion general de node_modules
```
pnpm install
```
## Genera tu BD SQLite
1. Recuerda generar una base de datos vacia SQLite, elije el nombre que desees. La BD por defecto para este repositorio es dev.db. Recuerda guardarla enla raiz de este proyecto, a nivel de tus modulos de ```node``` y ```.env``.

## Instalacion de dependecias ORM Prisma.
1. Los archivos de prisma ya estan configurados para evitarte trabajo doble, solo ejecuta los siguientes comandos para migrar los esquemas de las tablaas a tu BD y generar tus archivos de los que depende las consultas de prisma.

### Migramos las tablas de los esquemas a la BD. 
```
pnpm prisma migrate dev
```
### Generamos las dependencias del Prisma client
```
pnpm prisma generate
```

## Nota:
express-validator ts ya lo traae por defecto