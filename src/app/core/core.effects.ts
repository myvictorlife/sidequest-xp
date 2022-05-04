/*
 * File: core.effects.ts
 * Project: sidequest-xp
 * Created: Tuesday, 3rd May 2022 8:47:16 am
 * Last Modified: Wednesday, 4th May 2022 10:35:24 pm
 * Copyright © 2022 Sidequest XP
 */

import { ProductEffects } from './store/product/effects/product.effects';
import { CartEffects } from './store/cart/effects/cart.effects';

export const coreEffectsAtBootstrap = [ProductEffects, CartEffects];
