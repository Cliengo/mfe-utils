## MFE Utils

This package contains common utils used in the Cliengo MFE's.

## Installation

```bash
npx jsr install @cliengo/mfe-utils
```

## Upgrade Version
Si quieres actualizar la versión de este paquete en tu proyecto, la forma
más sencilla es removerlo e instalarlo de nuevo.

```bash
npx jsr remove @cliengo/mfe-utils
npx jsr install @cliengo/mfe-utils
```

## Usage

### React Query

Para sincronizar la caché de React Query y que se re-utilize la data
que ya otros MFEs han cargado deben ocurrir los siguientes pasos:

1. Usar el cliente de este paquete al momento de inizializar el cliente de React Query.

importante, para que typescript reconozca el cliente de React Query, asegurate de estar usando la misma versión de React Query que este paquete.
`"@tanstack/react-query": "^5.59.15"`

```ts
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@cliengo/mfe-utils/mod';

const App = () => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};
```

2. Usar los hooks de este paquete que ya tienen especificados el staleTime,
queryKey, etc.

```ts
import { cliengoQueries } from '@cliengo/mfe-utils/hooks';

const App = () => {
  /**
   * eso por detras esta usando el useQuery de react query
   * y el service del cliente que corresponda
   * */
  const { data: account, status: accountStatus } = cliengoQueries.account();

  if (accountStatus === 'error') {
    return <div>Error</div>;
  }

  /**
   * usualmente, sobretodo para el User, el Account y el Website
   * al llegar a este punto de tu app, probablemente ya se ha cargado
   * y no veras que se ejecute este if.
   * */
  if (accountStatus === 'pending') {
    return <div>Loading...</div>;
  }

  return <div>{account.name}</div>;
};

```

## Services

Este paquete contiene los servicios de la API de Cliengo en forma
de un conveniente SDK.

```tsx
import { getCliengoService } from '@cliengo/mfe-utils/services';
// import { getZordonService } from '@cliengo/mfe-utils/services'; // si usas Zordon

const App = () => {
  const chatbotConfigMutation = useMutation({
    mutationFn: () => {
      const service = getCliengoService();
    },
    onSuccess: () => {

    }
  })

  return (
    <button onClick={() => chatbotConfigMutation.mutate()}>
      {chatbotConfigMutation.isPending && 'Loading...'}
      {chatbotConfigMutation.isIdle && 'update'}
      {chatbotConfigMutation.isError && 'Error'}
    </button>
  )
}
```

## Hooks

Este paquete contiene algunos hooks convenientes para usar en tu
MFE.

### useCompanyId
Usa una query con react-query para obtener el account y de ahi el id (que s el companyId)

```tsx
import { useCompanyId } from '@cliengo/mfe-utils/hooks';

const App = () => {
  const companyId = useCompanyId();

  return <div>{companyId}</div>;
}
```

### useCurrentWebsite
Usa una query con react-query para obtener el account y de ahi el website actual

```tsx
import { useCurrentWebsite } from '@cliengo/mfe-utils/hooks';

const App = () => {
  const website = useCurrentWebsite();

  return <div>{website.title}</div>;
}
```


### useWebsiteId

Usualme, cuando se necesita el websiteId, este suele estar en la url
como un param. Este hook usa el `useParams` de react-router-dom para
obtenerlo.

```tsx
import { useWebsiteId } from '@cliengo/mfe-utils/hooks';

const App = () => {
  const websiteId = useWebsiteId();

  return <div>{websiteId}</div>;
}
```

### useCurrentWebsite

Obtener el objeto website.

```tsx
import { useCurrentWebsite, useWebsiteId } from '@cliengo/mfe-utils/hooks';

const App = () => {
  const websiteId = useWebsiteId();
  /**
   * El hook usa react-query por detras y no se ejecuta
   * hasta que el websiteId esté definido.
   * 
   */
  const website = useCurrentWebsite(websiteId);

  return <div>{website.title}</div>;
}

```

### useCustomEvent

Definir un callback para cuando un custom event sea disparado
desde otro mfe.

```tsx
interface TheDetailType {
  someProp: string;
}

const App = () => {
  /**
   * el hook se encarga de agregar el eventList
   * y de removerlo cuando el componente se desmonte.
   */
  useCustomEvent('some-event-name', (e) => {
    const event = e as CustomEvent<TheDetailType>;

    someFunction(event.detail);
  });
}
```

### useDisclosure

Handy hook para usar con modales, popovers, etc.

```tsx
import { useDisclosure } from '@cliengo/mfe-utils/hooks';

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>Open</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <button onClick={onClose}>Close</button>
      </Modal>
    </>
  );
};

```

## Theme

Este paquete contiene un tema personalizado compatible con Material UI.

```tsx
import { theme } from '@cliengo/mfe-utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};
```

## Types
Este paquete contiene una serie de tipos que pueden ser usados en tus
aplicaciones.

```tsx
import type { Website } from '@cliengo/mfe-utils/types';
```

## Utils

### withCharacterLimit

Maneja el límite de caracteres en un input o textarea.

```tsx
import { withCharacterLimit } from '@cliengo/mfe-utils/utils';

const App = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    withCharacterLimit(100, e, (value) => {
      // solo se ejecuta si el valor no excede el límite
      console.log(value);
    });
  };

  return (
    <input type="text" onChange={handleChange} />
  );
};
```

## URLS

Este paquete contiene las URLs de los servicios de la API de Cliengo.

```tsx
import { getUrls } from '@cliengo/mfe-utils/utils/urls';

const App = () => {
  /**
   * por defecto, revisa si la variable de entorno ENVIRONMENT
   * es 'prod' y si es, devuelve las URLs de producción.
   * 
   * Si no es 'prod', devuelve las URLs de stage.
   * 
   * También le puedes pasar el valor de la variable de entorno
   * por argumento getUrls('prod') o getUrls('stage').
   */
  const urls = getUrls();

  return (
    <div>
      {urls.API_URL}
      {urls.ZORDON_URL}
    </div>
  );
};
```
