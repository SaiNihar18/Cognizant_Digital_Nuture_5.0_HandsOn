import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import GitClient from './GitClient';

vi.mock('axios');

describe('Git Client Tests', () => {
    it('should return repository names for techiesyed', async () => {
        const mockRepos = [
            { name: 'repo-one' },
            { name: 'repo-two' }
        ];
        
        axios.get.mockResolvedValue({ data: mockRepos });

        const client = new GitClient();
        const repos = await client.getRepositories('techiesyed');

        expect(repos).toEqual(['repo-one', 'repo-two']);
        expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
    });
});
