# Skill Maestra: Creadora de Skills

Esta es la skill principal encargada de generar y definir nuevas skills para la aplicación educativa. Cuando el usuario solicite crear una nueva skill, se debe seguir la estructura y las directrices establecidas aquí.

## Propósito
Crear archivos Markdown bien estructurados para cada nueva skill que el usuario quiera aprender o añadir a su repertorio.

## Ubicación
Todas las nuevas skills generadas deben guardarse en el directorio principal de skills:
`/home/pansh/Estudiar/skills/`

## Plantilla para crear nuevas skills

Al crear una nueva skill, utiliza el siguiente formato:

```markdown
# Nombre de la Skill

## Descripción
Una breve descripción de lo que trata esta habilidad y por qué es útil aprenderla.

## Objetivos de Aprendizaje
- Objetivo 1
- Objetivo 2
- Objetivo 3

## Recursos Recomendados
- [Enlace a tutorial o recurso]
- Libro o artículo de interés

## Tareas o Prácticas
1. **Paso 1:** Descripción de la tarea inicial.
2. **Paso 2:** Ejercicio para afianzar el conocimiento.

## Progreso / Notas
*(Espacio para que el usuario añada sus propias notas, avances y reflexiones)*
```

## Instrucciones de Uso para la IA
Cuando el usuario diga "Crea una nueva skill sobre [Tema]", debes:
1. Analizar el tema solicitado.
2. Generar el contenido basándote en la plantilla anterior, rellenando cada sección con información relevante y útil sobre el tema.
3. Guardar el archivo generado como `/home/pansh/Estudiar/skills/[nombre_del_tema_en_minusculas].md`.
