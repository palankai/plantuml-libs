# AzureLicenseInstallation
```text
elements/azure/FlatSymbols/CneIntune/AzureLicenseInstallation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLicenseInstallation icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureLicenseInstallation.png) | ![AzureLicenseInstallation element](AzureLicenseInstallation.element.png) | ![AzureLicenseInstallation card](AzureLicenseInstallation.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureLicenseInstallation element
include('elements/azure/FlatSymbols/CneIntune/AzureLicenseInstallation')
AzureLicenseInstallation('element', 'License Installation', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureLicenseInstallation element
include('elements/azure/FlatSymbols/CneIntune/AzureLicenseInstallation')
AzureLicenseInstallation('element', 'License Installation', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureLicenseInstallation card
include('elements/azure/FlatSymbols/CneIntune/AzureLicenseInstallation')
AzureLicenseInstallationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureLicenseInstallation card
include('elements/azure/FlatSymbols/CneIntune/AzureLicenseInstallation')
AzureLicenseInstallationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
