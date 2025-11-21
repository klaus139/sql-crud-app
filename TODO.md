# TODO: Fix Bugs in auth.service.ts

- [x] Update auth.interface.ts to include login method in IAuthService
- [x] Fix auth.service.ts: add missing imports (jwt, User model)
- [ ] Fix auth.service.ts: move login method outside createUser
- [ ] Fix auth.service.ts: correct password comparison to use user.password
- [ ] Fix auth.service.ts: set expiresIn in JWT sign
- [ ] Fix auth.service.ts: fix types (email: string)
- [ ] Fix auth.service.ts: use repository for user lookup in login
- [ ] Verify fixes compile and run correctly
