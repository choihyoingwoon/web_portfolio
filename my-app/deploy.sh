# 빌드
npm run export

# 빌드된 정적 파일 이동
mv out web_portfolio

# 커밋 및 푸시
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# 작업 디렉터리로 돌아가기
cd ..