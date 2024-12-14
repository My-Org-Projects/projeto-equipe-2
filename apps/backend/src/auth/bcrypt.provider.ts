import { Injectable } from '@nestjs/common';
import { ProvedorCriptografia } from '@projetoequipe2/core';
import * as brypt from 'bcrypt';

@Injectable()
export class BcryptProvider implements ProvedorCriptografia {
  async criptografar(senha: string): Promise<string> {
    const salt = await brypt.genSalt(10);
    return brypt.hash(senha, salt);
  }

  async comparar(senha: string, senhaCriptografada: string): Promise<boolean> {
    return brypt.compare(senha, senhaCriptografada);
  }
}
