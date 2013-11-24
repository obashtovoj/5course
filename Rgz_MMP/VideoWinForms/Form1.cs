using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Diagnostics;

namespace VideoWinForms
{
    public partial class Form1 : Form, IMessageFilter
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void OpenFile()
        {
            OpenFileDialog dialog = new OpenFileDialog();
            dialog.Multiselect = false;
            if (dialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                _inputPath = dialog.FileName;
            }
            axWindowsMediaPlayer1.URL = _inputPath;
        }

        private string _inputPath;
        private void openToolStripMenuItem_Click(object sender, EventArgs e)
        {
            OpenFile();
            Application.AddMessageFilter(this);
            infoToolStripMenuItem.Enabled = true;
            trimToolStripMenuItem.Enabled = true;
        }

        private void trimToolStripMenuItem_Click(object sender, EventArgs e)
        {
            SaveFileDialog saveDialog = new SaveFileDialog();
            saveDialog.Filter = String.Format("Video Files (*{0})|*{0}", System.IO.Path.GetExtension(_inputPath));
            if (saveDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                if (_inputPath != saveDialog.FileName)
                {
                    using (var trimForm = new TrimForm(_inputPath, saveDialog.FileName))
                    {
                        trimForm.ShowDialog();
                    }
                }
                else MessageBox.Show("Невозможно сохранить файл в исходный файл");
            }
        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            if (axWindowsMediaPlayer1.playState == WMPLib.WMPPlayState.wmppsPlaying &&
                e.Alt && e.KeyCode == Keys.Enter)
            {
                axWindowsMediaPlayer1.fullScreen = true;
            }
        }

        public bool PreFilterMessage(ref Message m)
        {
            if (m.Msg == 0x0100)
            {
                Keys keyCode = (Keys)(int)m.WParam & Keys.KeyCode;
                if (keyCode == Keys.Escape)
                {
                    axWindowsMediaPlayer1.fullScreen = false;
                }
                return true;
            }
            return false;
        }

        private void infoToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("Показать информацию?", "", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == System.Windows.Forms.DialogResult.Yes)
                MessageBox.Show(Media.GetStreamInfo(_inputPath));
            using (var info = new Information(_inputPath))
            {
                info.ShowDialog();
            }
        }

    }
}
