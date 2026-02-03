# 🚀 GUÍA COMPLETA: SUBIR TU CALENDARIO A GITHUB PAGES

## 📋 LO QUE NECESITAS

1. ✅ Calendario Lunar (archivo HTML que ya tienes)
2. ✅ manifest.json (ya creado)
3. ✅ service-worker.js (ya creado)
4. 🎨 Iconos (los vamos a crear AHORA)
5. 💻 Cuenta de GitHub (gratis)

---

## PASO 1: CREAR ICONOS (5 minutos)

### Opción A: Usar generador automático (MÁS FÁCIL) ⭐

1. Ve a: **https://www.pwabuilder.com/imageGenerator**
2. Sube una imagen base (puede ser cualquier foto de luna)
3. Click "Generate"
4. Descarga el ZIP con todos los tamaños
5. Renombra los archivos:
   - `icon-72x72.png` → `icon-72.png`
   - `icon-96x96.png` → `icon-96.png`
   - `icon-192x192.png` → `icon-192.png`
   - `icon-512x512.png` → `icon-512.png`

### Opción B: Crear icono simple en Canva

1. Ve a **canva.com**
2. Crear diseño → Personalizado → 512x512 px
3. Fondo: Degradado azul/morado
4. Agrega emoji 🌙 grande en centro
5. Descarga como PNG
6. Usa https://www.iloveimg.com/resize-image para crear otros tamaños

### Opción C: Usar icono básico (TEMPORAL)

Por ahora, puedes usar emojis como iconos:
1. Ve a https://emoji.aranja.com/
2. Descarga emoji 🌙 en diferentes tamaños
3. Usa esos como iconos temporales

---

## PASO 2: CREAR REPOSITORIO EN GITHUB (3 minutos)

1. **Ve a GitHub.com**
   - Si no tienes cuenta: Sign Up (gratis)
   - Si tienes cuenta: Log In

2. **Crear nuevo repositorio**
   - Click en "+" (arriba derecha)
   - "New repository"
   
3. **Configurar el repo:**
   ```
   Repository name: calendario-lunar
   Description: 🌙 Calendario Lunar Astrológico PWA
   Public ✓ (debe ser público para GitHub Pages gratis)
   Add README: NO
   ```

4. **Click "Create repository"**

---

## PASO 3: SUBIR ARCHIVOS (5 minutos)

### Método A: Drag & Drop (MÁS FÁCIL)

1. En tu repo nuevo, click **"uploading an existing file"**
2. **Arrastra estos archivos:**
   ```
   calendario-lunar-final.html
   manifest.json
   service-worker.js
   icon-72.png
   icon-96.png
   icon-128.png
   icon-144.png
   icon-152.png
   icon-192.png
   icon-384.png
   icon-512.png
   ```
3. **Commit message:** "Initial commit - Calendario Lunar PWA"
4. Click **"Commit changes"**

### Método B: GitHub Desktop (si prefieres app)

1. Descarga GitHub Desktop
2. Clone tu repositorio
3. Copia archivos a la carpeta
4. Commit & Push

---

## PASO 4: ACTIVAR GITHUB PAGES (2 minutos)

1. En tu repositorio, click **"Settings"** (arriba)
2. Scroll down a **"Pages"** (menú izquierdo)
3. En **"Source"** selecciona: **"main" branch**
4. Click **"Save"**
5. **¡Espera 1-2 minutos!**
6. Refresh la página
7. Verás: **"Your site is live at https://tu-usuario.github.io/calendario-lunar/"**

---

## PASO 5: AJUSTES FINALES (3 minutos)

### A) Renombrar archivo principal

GitHub Pages busca `index.html` por defecto:

**Opción 1: Renombrar**
- Renombra `calendario-lunar-final.html` → `index.html`

**Opción 2: Mantener nombre**
- Tu URL será: `https://tu-usuario.github.io/calendario-lunar/calendario-lunar-final.html`

### B) Actualizar rutas en manifest.json

Edita manifest.json en GitHub:
```json
"start_url": "./",
```

### C) Actualizar service-worker.js

Edita service-worker.js en GitHub:
```javascript
const urlsToCache = [
  './',
  './index.html',  // o './calendario-lunar-final.html'
  './manifest.json'
];
```

---

## PASO 6: PROBAR EN TU ANDROID (2 minutos)

1. **Abre Chrome** en tu teléfono
2. **Ve a tu URL:** `https://tu-usuario.github.io/calendario-lunar/`
3. **Espera a que cargue**
4. Aparecerá notificación: **"Agregar a pantalla de inicio"**
5. **Click "Agregar"**
6. **¡Listo!** 🎉

---

## 🎯 CHECKLIST FINAL

Antes de instalar, verifica:

- [ ] Todos los archivos subidos a GitHub
- [ ] GitHub Pages activado (Settings → Pages)
- [ ] URL funcionando (abre en navegador)
- [ ] Manifest.json sin errores (F12 → Console)
- [ ] Service Worker registrado (F12 → Application)
- [ ] Iconos cargando correctamente

---

## 🐛 TROUBLESHOOTING

### "La página no carga"
- Espera 2-3 minutos (GitHub tarda en desplegar)
- Verifica que Pages esté activado
- URL correcta: https://USUARIO.github.io/REPO/

### "No aparece opción de instalar"
- Debe ser HTTPS (GitHub Pages es automático)
- Usa Chrome en Android
- Verifica manifest.json en Console

### "Errores en Console"
- F12 → Console para ver errores
- Rutas incorrectas en manifest/service-worker
- Archivos faltantes

### "Service Worker no se registra"
- Verifica que service-worker.js esté en raíz
- Revisa rutas en el archivo
- Hard refresh: Ctrl+Shift+R

---

## 📱 RESULTADO FINAL

Tu calendario estará disponible en:
```
https://TU-USUARIO.github.io/calendario-lunar/
```

**Funcionará:**
- ✅ Como app instalable en Android
- ✅ En cualquier navegador (Chrome, Firefox, Safari)
- ✅ En computadora (también se puede instalar)
- ✅ Offline después de la primera carga
- ✅ Con actualizaciones automáticas cuando hagas cambios

---

## 🔄 ACTUALIZAR LA APP

Cuando hagas cambios:
1. Edita archivos en GitHub (click en archivo → Edit)
2. O sube nuevos archivos
3. Commit changes
4. GitHub Pages actualiza en 1-2 minutos
5. La app se actualiza automáticamente en los dispositivos

---

## 💡 CONSEJOS PRO

1. **Dominio personalizado:** Puedes usar tu propio dominio (Settings → Pages → Custom domain)
2. **Analytics:** Agrega Google Analytics para ver cuántos usan la app
3. **Versioning:** Cambia version en manifest y service-worker al actualizar
4. **Testing:** Usa https://www.pwabuilder.com/ para validar tu PWA

---

## 🎨 MEJORAR ICONOS DESPUÉS

Cuando quieras iconos profesionales:
1. Contrata diseñador en Fiverr ($5-20)
2. Usa herramientas como Figma
3. O usa generadores AI (DALL-E, Midjourney)

---

## 📊 SIGUIENTES PASOS

Una vez funcionando:
1. ✅ Probar en varios Android
2. ✅ Compartir con amigos/familia
3. ✅ Agregar Google Calendar sync
4. ✅ Implementar notificaciones
5. ✅ Crear interpretaciones de aspectos

---

**¡Éxito con tu Calendario Lunar! 🌙✨**

Si tienes problemas, revisa:
- GitHub Pages status: https://www.githubstatus.com/
- PWA checklist: https://web.dev/pwa-checklist/
- Service Worker debugging: Chrome DevTools → Application
