# Entities

Entities are proto backed, immutable data structures providing abstract information about various game entities.
These entities describe a general entity from the game world, as opposed to campaign specific version of entities 'existing' in the game. Thus, an entity 'Orc' describes a general or and its properties, not the specific Orc 'Grok' that lives in Waterdeep and has a smithy there. Although the latter is probably based on the general orc, with slight modifications.

## Immutable

Entities are immutable and can never be changed once created. Each entity usually only exists once and is shared throughout the app. They are usually accessed by name through a service per entity type.

## Service

For each type of entity there is a dedicated global service (injected in root) that provides access to all the entities.
Entities are served through a binary proto file that is read and processed by the service.

## Storage

Entities values are stored in the entities directory per type, with one entity per file. Such files are in text proto format.
All entities of a specific type are processed with the genbinaryproto.sh script (bash) into a single binary file by concatenating all text files and converting it into binary.
