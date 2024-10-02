"use client"

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface FileSystem {
  [key: string]: string | FileSystem
}

const fileSystem: FileSystem = {
  'Profile.txt': '情報系のB3。 普段はバックエンド書いたりシェルスクリプト書いて遊んでます。 🏸 & 📸 が好きです',
  'projects': {
    'Portfolio.txt': 'ポートフォリオウェブサイト - React, Next.js, Tailwind CSSを使用',
  },
  'skills': {
    'frontend.txt': 'HTML, CSS, TypeScript, React, Next.js',
    'backend.txt': 'Node.js, Python, Shell Script',
    'database.txt': ' PostgreSQL',
  },
}

export default function CLIMode() {
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [output, setOutput] = useState<string[]>(['ようこそ！ "help" と入力してコマンドリストを表示します。'])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [output])

  const getCurrentDir = () => {
    let current: FileSystem | string = fileSystem
    for (const dir of currentPath) {
      if (typeof current === 'object' && dir in current) {
        current = current[dir]
      } else {
        return null
      }
    }
    return current
  }

  const handleCommand = (command: string) => {
    const parts = command.split(' ')
    const cmd = parts[0]
    const args = parts.slice(1)

    switch (cmd) {
      case 'ls':
        const currentDir = getCurrentDir()
        if (typeof currentDir === 'object') {
          setOutput([...output, `$ ${command}`, ])
        } else {
          setOutput([...output, `$ ${command}`, 'エラー: 現在のパスはディレクトリではありません。'])
        }
        break
      case 'cd':
        if (args[0] === '..') {
          if (currentPath.length > 0) {
            setCurrentPath(currentPath.slice(0, -1))
            setOutput([...output, `$ ${command}`, `ディレクトリを変更: ${currentPath.join('/')} に移動しました。`])
          } else {
            setOutput([...output, `$ ${command}`, 'エラー: これ以上上の階層に移動できません。'])
          }
        } else {
          const newPath = [...currentPath, args[0]]
          let current: FileSystem | string = fileSystem
          for (const dir of newPath) {
            if (typeof current === 'object' && dir in current) {
              current = current[dir]
            } else {
              setOutput([...output, `$ ${command}`, `エラー: ディレクトリ '${args[0]}' が見つかりません。`])
              return
            }
          }
          if (typeof current === 'object') {
            setCurrentPath(newPath)
            setOutput([...output, `$ ${command}`, `ディレクトリを変更: ${newPath.join('/')} に移動しました。`])
          } else {
            setOutput([...output, `$ ${command}`, `エラー: '${args[0]}' はディレクトリではありません。`])
          }
        }
        break
      case 'cat':
        const file = getCurrentDir()
        if (typeof file === 'object' && args[0] ) {
          setOutput([...output, `$ ${command}`,])
        } else {
          setOutput([...output, `$ ${command}`, `エラー: ファイル '${args[0]}' が見つかりません。`])
        }
        break
      case 'help':
        setOutput([...output, `$ ${command}`, 'コマンドリスト:', 'ls - 現在のディレクトリの内容を表示', 'cd <dir> - ディレクトリを変更', 'cat <file> - ファイルの内容を表示', 'help - コマンドリストを表示'])
        break
      default:
        setOutput([...output, `$ ${command}`, `エラー: コマンド '${cmd}' が見つかりません。`])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput('')
  }

  return (
    <motion.div 
      className="bg-black text-green-400 p-4 rounded-lg shadow-lg font-mono text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 h-64 overflow-y-auto">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="mr-2">
          {currentPath.length > 0 ? `/${currentPath.join('/')}` : '/'} $
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-transparent outline-none"
          ref={inputRef}
          aria-label="CLIコマンド入力"
        />
      </form>
    </motion.div>
  )
}