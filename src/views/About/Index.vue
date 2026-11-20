<template>
  <div class="mx-auto max-w-4xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
    <div class="text-center">
      <!-- Directiva v-diablo, en blanco 😎 -->
      <h1 v-diablo:white class="my-8 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Diablo 3 Profile Finder
      </h1>

      <hr class="mb-8 border-slate-300">

      <p class="mb-4 text-lg leading-8 text-slate-600">
        Diablo III is a genre-defining action-RPG set in Sanctuary, a world ravaged by the eternal conflict between angels and demons.
      </p>
      <p class="text-lg leading-8 text-slate-600">
        <span class="font-bold text-slate-800">D3PF</span> allows you to enter your battle-tag to see your profile, your last played heroes, your items, skills and more.
      </p>
    </div>

    <hr class="my-10 border-slate-300">

    <section class="mt-10">
      <h2 class="mb-4 text-2xl font-semibold text-slate-950">API Rate Limit</h2>
      <div class="rounded-lg border border-slate-300 bg-slate-100 p-4 leading-7 text-slate-700">
        Clients exceeding these limits may experience slower service or a response error. See the
        <a
          class="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
          href="https://develop.battle.net/documentation/guides/getting-started"
        >Getting Started Guide</a> for more details.
      </div>

      <dl class="mt-6 grid gap-6 text-center sm:grid-cols-2 sm:text-left">
        <div>
          <dt class="font-semibold text-slate-900">36,000 requests per hour</dt>
          <dd class="mt-1 text-slate-600">Long-term Quota</dd>
        </div>

        <div>
          <dt class="font-semibold text-slate-900">100 requests per second</dt>
          <dd class="mt-1 text-slate-600">Short-term Throttle</dd>
        </div>
      </dl>

    </section>

    <section class="my-10">
      <h2 class="mb-4 text-2xl font-semibold text-slate-950">Getting Started</h2>

      <p class="mb-4 leading-7 text-slate-700">Before you can get started using the Blizzard APIs, you must:</p>

      <ol class="list-inside list-decimal space-y-2 leading-7 text-slate-700">
        <li>Login or create a new Battle.net account.</li>
        <li>Create a client through the API Access menu option.</li>
        <li>Generate a secret for the client.</li>
        <li>Understand how Blizzard APIs work with OAuth.</li>
      </ol>

      <p class="mt-4 break-words leading-7 text-slate-700">Read more here:
        <a
          class="text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
          href="https://develop.battle.net/documentation/guides/getting-started"
        >https://develop.battle.net/documentation/guides/getting-started</a>
      </p>
    </section>

    <hr class="border-slate-300">
  </div>
</template>