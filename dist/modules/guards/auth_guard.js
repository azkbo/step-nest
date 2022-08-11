"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
let AuthGuard = class AuthGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return this._validateRequest(request);
    }
    _validateRequest(request) {
        console.log('================>AuthGuard validateRequest');
        console.log(request.url);
        return this._parseToken(request.headers);
    }
    _parseToken(headers) {
        if (headers && headers.token) {
            console.log(headers.token);
            return true;
        }
        throw new common_1.UnauthorizedException('登录超时，请重新登录！', '账户不存在');
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)()
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth_guard.js.map