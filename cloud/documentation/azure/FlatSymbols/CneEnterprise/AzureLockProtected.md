# AzureLockProtected
```text
elements/azure/FlatSymbols/CneEnterprise/AzureLockProtected
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLockProtected icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureLockProtected.png) | ![AzureLockProtected element](AzureLockProtected.element.png) | ![AzureLockProtected card](AzureLockProtected.card.png) |
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

' loads the AzureLockProtected element
include('elements/azure/FlatSymbols/CneEnterprise/AzureLockProtected')
AzureLockProtected('element', 'Lock Protected', 'an optional tech field')
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

' loads the AzureLockProtected element
include('elements/azure/FlatSymbols/CneEnterprise/AzureLockProtected')
AzureLockProtected('element', 'Lock Protected', 'an optional tech field')
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

' loads the AzureLockProtected card
include('elements/azure/FlatSymbols/CneEnterprise/AzureLockProtected')
AzureLockProtectedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLockProtected card
include('elements/azure/FlatSymbols/CneEnterprise/AzureLockProtected')
AzureLockProtectedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
