# 🏠 RealtyHubApp Frontend

Proyecto React/TypeScript construido sobre **Vite**

La arquitectura se enfoca en el **aislamiento de la lógica** y el **flujo de dependencia unidireccional** (`@features` solo usa `@entities` y `@common`).

---

## Setup y Requisitos

Para correr este proyecto, necesitas lo siguiente:

- **Node.js:** Versión 18+ (20 recomendado).

### Primeros Pasos

1.  Instala todas las dependencias:
    ```bash
    npm install
    ```
2.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

---

## 💻 Flujo de Trabajo y Scripts Esenciales

| Comando         | Descripción                                          |
| :-------------- | :--------------------------------------------------- |
| `npm run dev`   | Despliega la aplicación en modo desarrollo (HMR).    |
| `npm run build` | Construye la _app_ final para producción en `/dist`. |
| `npm run test`  | Ejecuta todos los _tests_ unitarios con **Vitest**.  |

### 🚀 Prueba de Rendimiento hacerlas en mode (Preview)

Correr **Lighthouse**: `npm run buld & npm run preview`

---

## Arquitectura

La estructura de `src/` se divide en capas por responsabilidad, usando alias absolutos para la portabilidad.

| Alias           | Capa            | Responsabilidad                                                                                  |
| :-------------- | :-------------- | :----------------------------------------------------------------------------------------------- |
| **`@pages`**    | Composición     | Monta las _features_ en las rutas. **Libre de lógica de negocio.**                               |
| **`@features`** | Negocio/Dominio | Funcionalidades completas (`/properties/list`). Incluye _hooks_ de datos y APIs locales.         |
| **`@entities`** | Modelos         | Tipos de datos centrales (`IProperty`, `IOwner`). El diccionario del negocio.                    |
| **`@common`**   | Utilidades      | Componentes de UI (`<Inputs>`), _hooks_ genéricos (`useDebounce`), y librerías base (`http.ts`). |
