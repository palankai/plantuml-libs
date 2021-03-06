# MaterialsSettingsInputComposite
```text
elements/materials/Action/MaterialsSettingsInputComposite
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsInputComposite icon](../../../icons/materials/Action/MaterialsSettingsInputComposite.png) | ![MaterialsSettingsInputComposite element](MaterialsSettingsInputComposite.element.png) | ![MaterialsSettingsInputComposite card](MaterialsSettingsInputComposite.card.png) |
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
include('styles/materials')

' loads the MaterialsSettingsInputComposite element
include('elements/materials/Action/MaterialsSettingsInputComposite')
MaterialsSettingsInputComposite('element', 'Settings Input Composite', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsSettingsInputComposite element
include('elements/materials/Action/MaterialsSettingsInputComposite')
MaterialsSettingsInputComposite('element', 'Settings Input Composite', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsSettingsInputComposite card
include('elements/materials/Action/MaterialsSettingsInputComposite')
MaterialsSettingsInputCompositeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsSettingsInputComposite card
include('elements/materials/Action/MaterialsSettingsInputComposite')
MaterialsSettingsInputCompositeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
