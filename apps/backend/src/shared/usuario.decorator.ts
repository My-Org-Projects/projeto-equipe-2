import { createParamDecorator, ExecutionContext } from "@nestjs/common"

const UsuarioLogado = createParamDecorator(
    (__dirname, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();
        return req.usuarioDto
    }
)

export { UsuarioLogado }