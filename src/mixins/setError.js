import { useError } from '@/store/modules/error.js'

export function useSetError() {
  const errorStore = useError()

  function setApiErr(params) {
    errorStore.setError(params)
  }

  return {
    setApiErr
  }
}
