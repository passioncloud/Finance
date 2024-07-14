import { KeycloakConfig } from "keycloak-js"

const keycloakConfig: KeycloakConfig = {
  "realm": "tender",
  "url": "http://localhost:4004",
  clientId: "webapp"
}

export default keycloakConfig 
