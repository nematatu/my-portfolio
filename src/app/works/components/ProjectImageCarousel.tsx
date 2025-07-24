import fs from 'fs/promises';
import path from 'path';
import EmblaCarousel from './thumbnail/EmblaCarousel'; // EmblaCarousel のパスを調整
import { EmblaOptionsType } from 'embla-carousel';

interface ProjectImageCarouselProps {
  folderName: string; // 例: "portfolio", "project-x"
  options?: EmblaOptionsType; // EmblaCarousel に渡すオプション
}

// サーバーサイドで画像のファイル名リストを取得する関数
async function getImageFileNames(folderName: string): Promise<string[]> {
  const publicDir = path.join(process.cwd(), 'public'); // プロジェクトの public ディレクトリのパス
  const imageFolderPath = path.join(publicDir, 'works', folderName); // 例: public/works/portfolio

  try {
    const files = await fs.readdir(imageFolderPath);
    // 一般的な画像拡張子でフィルタリング
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
    );
    return imageFiles.sort(); // 一貫した順序のためにソート
  } catch (error) {
    console.error(`Failed to read image folder ${imageFolderPath}:`, error);
    return []; // フォルダが見つからない場合やエラーの場合は空の配列を返す
  }
}

export default async function ProjectImageCarousel({ folderName, options }: ProjectImageCarouselProps) {
  const imageFileNames = await getImageFileNames(folderName);
  const baseImagePath = `/works/${folderName}`; // 公開URLパスを構築

  if (imageFileNames.length === 0) {
    // 画像が見つからない場合のフォールバックUI
    return <p>No images found for {folderName}.</p>; 
  }

  return (
    <EmblaCarousel
      baseImagePath={baseImagePath}
      imageFileNames={imageFileNames}
      options={options}
    />
  );
}
