npm run build

# 배포 스크립트 실행
git checkout -b gh-pages
git add out
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
git checkout main