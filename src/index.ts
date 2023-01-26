import type { Preset } from '@unocss/core'
import { variants } from '@unocss/preset-mini/variants';
import type { PresetMiniOptions } from '@unocss/preset-mini';

export { variants };

export interface PresetMiniVariantsOptions extends PresetMiniOptions { }

export const presetMiniVariants = (options: PresetMiniVariantsOptions = {}): Preset => {
  options.dark = options.dark ?? 'class'
  options.attributifyPseudo = options.attributifyPseudo ?? false
  options.preflight = options.preflight ?? true
  options.variablePrefix = options.variablePrefix ?? 'un-'

  return {
    name: 'unocss-preset-mini-variants',
    variants: variants(options),
    options,
  }
};

export default presetMiniVariants;
