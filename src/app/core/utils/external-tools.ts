/*
 * File: external-tools.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 5:20:41 pm
 * Last Modified: Tuesday, 3rd May 2022 8:03:43 pm
 * Copyright © 2022 Sidequest XP
 */

import { environment } from '@environment';

export const externalToolsUtils = {
  getProductsUrl: (): string => `${environment.baseURL}/products`,
};
