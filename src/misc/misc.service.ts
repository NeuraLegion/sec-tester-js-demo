import { Injectable } from '@nestjs/common';
import { render } from 'ejs';

@Injectable()
export class MiscService {
  public render(
    template: string,
    params: Record<string, any>
  ): Promise<string> {
    return Promise.resolve(render(template, params));
  }

  public async fetch(url: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.text();
  }
}
