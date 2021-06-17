import User from 'App/Models/User'

declare module '@ioc:Adonis/Addons/Auth' {
  interface ProvidersList {
    User: {
      implementation: LucidProviderContract<typeof User>
      config: LucidProviderConfig<typeof User>
    }
  }

  interface GuardsList {
    web: {
      implementation: SessionGuardContract<'User', 'web'>
      config: SessionGuardConfig<'User'>
    }
  }
}
