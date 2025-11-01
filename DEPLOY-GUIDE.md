# 🚀 Guía de Deploy: GitHub + Vercel

## Paso a Paso Completo

### 📋 Prerrequisitos

- [ ] Cuenta de GitHub (gratis)
- [ ] Cuenta de Vercel (gratis) - https://vercel.com
- [ ] Git instalado en tu computadora

---

## 🎯 PARTE 1: Compilar Targets (OBLIGATORIO)

### ⚠️ Sin este paso, la app NO funcionará

1. **Ve al compilador online:**
   - URL: https://hiukim.github.io/mind-ar-js-doc/tools/compile

2. **Sube las 2 imágenes:**
   - Busca los archivos en: `targets/baldosa3.jpg` y `targets/baldosa4.jpg`
   - Click en "Add Image" y súbelas ambas
   - Asegúrate que estén en orden (baldosa3 primero, baldosa4 segundo)

3. **Inicia la compilación:**
   - Click en el botón **"Start"**
   - Espera 1-2 minutos (no cierres la pestaña)
   - Verás un progreso en pantalla

4. **Descarga el resultado:**
   - Se generará un archivo llamado `targets.mind`
   - Descárgalo a tu computadora

5. **Colócalo en el proyecto:**
   - Mueve `targets.mind` a la carpeta `targets/`
   - Debe quedar: `targets/targets.mind`

✅ **Checkpoint:** Verifica que `targets/targets.mind` existe

---

## 🎯 PARTE 2: Crear Repositorio en GitHub

### Opción A: Usando GitHub Desktop (Fácil)

1. **Descarga GitHub Desktop:**
   - https://desktop.github.com/

2. **Inicia sesión** con tu cuenta de GitHub

3. **Crea nuevo repositorio:**
   - File > New Repository
   - Name: `baldosas-ar` (o el nombre que prefieras)
   - Local Path: Selecciona la carpeta del proyecto
   - Click "Create Repository"

4. **Publish:**
   - Click en "Publish repository"
   - Desmarca "Keep this code private" si quieres que sea público
   - Click "Publish Repository"

✅ **Checkpoint:** Verifica en github.com que tu repo tiene todos los archivos

### Opción B: Usando Git en Terminal

```bash
# 1. Navega a la carpeta del proyecto
cd baldosas-ar-deploy

# 2. Verifica que targets.mind existe
ls targets/targets.mind

# 3. Inicializa git
git init

# 4. Agrega todos los archivos
git add .

# 5. Primer commit
git commit -m "Initial commit: Baldosas AR MVP"

# 6. Crea repositorio en GitHub (en el navegador)
# Ve a github.com > New Repository > baldosas-ar

# 7. Conecta tu repo local con GitHub
git remote add origin https://github.com/TU-USUARIO/baldosas-ar.git

# 8. Push
git branch -M main
git push -u origin main
```

✅ **Checkpoint:** Ve a tu repo en GitHub y verifica que todos los archivos estén ahí, especialmente `targets/targets.mind`

---

## 🎯 PARTE 3: Deploy en Vercel

### Opción A: Desde la Web (Recomendado)

1. **Ve a Vercel:**
   - https://vercel.com
   - Login con tu cuenta de GitHub

2. **Importa el proyecto:**
   - Click en **"New Project"**
   - Selecciona tu repositorio `baldosas-ar`
   - Click en **"Import"**

3. **Configuración:**
   - **Project Name:** `baldosas-ar` (o el que prefieras)
   - **Framework Preset:** None (déjalo en blanco)
   - **Root Directory:** `./` (déjalo así)
   - **Build Command:** (déjalo vacío)
   - **Output Directory:** (déjalo vacío)

4. **Deploy:**
   - Click en **"Deploy"**
   - Espera 1-2 minutos

5. **¡Listo!**
   - Vercel te dará una URL: `https://tu-proyecto.vercel.app`
   - Copia esa URL

✅ **Checkpoint:** Abre la URL en tu navegador, deberías ver "Cargando experiencia AR..."

### Opción B: Vercel CLI

```bash
# 1. Instala Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod

# 4. Sigue las instrucciones en pantalla
```

---

## 🎯 PARTE 4: Probar la App

### En Desktop (para verificar que cargó):

1. Abre tu URL de Vercel en Chrome
2. Deberías ver:
   - Mensaje: "Cargando experiencia AR..."
   - Luego desaparece (normal, porque no hay cámara en desktop)

### En Móvil (prueba real):

1. **Abre la URL en tu móvil:**
   - Usa Chrome (Android) o Safari (iOS)
   - URL: `https://tu-proyecto.vercel.app`

2. **Acepta permisos:**
   - ✅ Cámara: Permitir
   - ✅ Ubicación: Permitir

3. **Ve a las imágenes de prueba:**
   - Agrega `/test-images.html` a la URL
   - URL: `https://tu-proyecto.vercel.app/test-images.html`

4. **Descarga o imprime una baldosa:**
   - Click en "Descargar" o "Imprimir"
   - Opción fácil: Abre en otra pantalla/tablet

5. **Prueba el AR:**
   - Vuelve a `https://tu-proyecto.vercel.app`
   - Apunta la cámara a la imagen de la baldosa
   - Mantén estable 2-3 segundos

### ✅ ¿Qué deberías ver?

**Cuando la baldosa es detectada:**
1. Aparece texto en AR sobre la baldosa con:
   - Título (ej: "Aquí trabajaron Militantes Populares")
   - Nombres de las personas
   - Fechas e información
2. Panel informativo arriba de la pantalla con:
   - Nombre de la baldosa
   - Descripción
   - Tu ubicación GPS

**Colores:**
- Texto blanco y amarillo
- Fondo rojo semi-transparente
- Panel negro con texto blanco

---

## 🐛 Troubleshooting

### ❌ "Failed to load target"

**Causa:** No existe `targets.mind`

**Solución:**
1. Verifica que compilaste los targets
2. Verifica que hiciste commit de `targets/targets.mind`
3. Verifica en GitHub que el archivo existe
4. Re-deploya en Vercel (Settings > Redeploy)

### ❌ Página en blanco

**Causa:** Error de JavaScript

**Solución:**
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Si dice "CORS error": Verifica vercel.json
4. Si dice "Camera not allowed": Da permisos de cámara

### ❌ AR no aparece

**Causas posibles:**
- Iluminación mala → Mejora la luz
- Imagen muy pequeña → Imprime más grande (A4)
- Imagen deformada → Usa la imagen original
- Cámara moviendo → Mantén estable 3 segundos

**Solución:**
1. Asegúrate de estar en `index.html` (no test-images)
2. Mejora iluminación
3. Muestra la imagen completa en cuadro
4. Mantén distancia de 20-30cm
5. Espera 3 segundos sin mover

### ❌ "Cargando experiencia AR..." no desaparece

**Causa:** Targets no cargaron

**Solución:**
1. Espera 10 segundos más
2. Recarga la página
3. Verifica en Network (F12) que `targets.mind` se descargó (debe ser ~100-500KB)

---

## 📊 Verificación Final

### ✅ Checklist de Deploy Exitoso:

- [ ] Repo en GitHub con todos los archivos
- [ ] `targets/targets.mind` existe en GitHub
- [ ] Deploy en Vercel completado
- [ ] URL funciona en desktop
- [ ] URL funciona en móvil
- [ ] Cámara se activa
- [ ] Ubicación se detecta
- [ ] test-images.html muestra las baldosas
- [ ] AR aparece al escanear baldosa
- [ ] Panel informativo funciona

Si todos ✅, **¡FELICIDADES!** 🎉 Tu app está funcionando.

---

## 🔄 Actualizaciones Futuras

### Para hacer cambios:

```bash
# 1. Haz tus cambios en el código
# 2. Commit
git add .
git commit -m "Descripción del cambio"

# 3. Push
git push

# 4. Vercel auto-deploya
# Espera 1-2 minutos y revisa tu URL
```

### Para agregar más baldosas:

1. Consigue nueva foto de baldosa
2. Compila TODOS los targets juntos (viejos + nuevo)
3. Reemplaza `targets.mind`
4. Agrega código en `index.html` (ver GUIA-MODELOS-3D.md)
5. Commit y push

---

## 📞 Ayuda

**Si algo no funciona:**

1. Revisa esta guía de nuevo
2. Revisa la consola (F12) para errores
3. Verifica en GitHub que todos los archivos están
4. Verifica en Vercel > Deployments que el deploy fue exitoso
5. Intenta en otro dispositivo/navegador

---

## 🎉 ¡Éxito!

Una vez funcionando, comparte tu URL:
- Con amigos para testing
- En redes sociales
- Con organizaciones de DDHH

Tu app está ayudando a mantener viva la memoria. 💛

---

**Memoria, Verdad y Justicia**

🇦🇷 Nunca Más 🇦🇷
