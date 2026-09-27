# Roman Matskailo — portfolio

Це готова статична версія сайту для GitHub Pages. `index.html` лежить у корені, тому збірка або npm не потрібні.

## Як опублікувати

1. Створіть новий репозиторій на GitHub.
2. Завантажте **вміст цієї папки** в корінь репозиторію: `index.html`, `styles.css`, `script.js`, папку `media` та файл `.nojekyll`.
3. У репозиторії відкрийте **Settings → Pages**.
4. У **Build and deployment** виберіть **Deploy from a branch**, гілку **main**, папку **/(root)** і натисніть **Save**.

GitHub покаже адресу сайту на сторінці налаштувань Pages після публікації.

## Якщо працюєте через Git у терміналі

Відкрийте термінал у цій папці та виконайте:

```powershell
git init -b main
git add .
git commit -m "Add portfolio site"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Замініть `YOUR_USERNAME` і `YOUR_REPO` на свої значення. Якщо Git попросить налаштувати ім'я або email автора комітів, використайте свої GitHub-дані.

Усі внутрішні шляхи на сайті відносні, тому він працюватиме і за адресою `username.github.io/repository/`.
