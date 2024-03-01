import portuguese from '../../../resources/locales/pt-BR'

type Language = 'pt-BR'

export type Resource = typeof portuguese

export const resources: Record<Language, Resource> = {
  "pt-BR": portuguese
}